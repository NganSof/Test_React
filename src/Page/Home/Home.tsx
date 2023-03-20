import { FC } from "react";
import { useGetListUsersQuery } from "../../service/UserService";
import { User } from "../../store/User";

export const Home: FC = () => {
  const { data } = useGetListUsersQuery();

  return (
    <div>
      <div className="bg-white py-24 sm:py-32 ">
        {data?.results?.map((item: User) => {
          return (
            <div
              key={item.id.name}
              className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3 border-5 border-solid border-black"
            >
              <div className="max-w-2xl flex justify-around ">
                <label className=" tracking-tight text-gray-900 sm:text-4xl">
                  Name
                </label>
                <p className="w-40">{`${item.name.first} ${item.name.last}`}</p>
              </div>
              <div className="max-w-2xl flex justify-around  ">
                <label className=" tracking-tight text-gray-900 sm:text-4xl">
                  Email
                </label>
                <p className="w-40">{item.email}</p>
              </div>
              <div className="max-w-2xl flex justify-around ">
                <label className=" tracking-tight text-gray-900 sm:text-4xl">
                  Phone
                </label>
                <p className="w-40">{item.phone}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
