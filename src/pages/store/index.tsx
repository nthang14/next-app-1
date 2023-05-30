import type { ReactElement } from "react";
import Layout from "~/components/layout";
import StoreLayout from "~/components/storeLayout";
import type { NextPageWithLayout } from "~/pages/_app";
import {
  useGetStoreQuery,
  useCreateStoreMutation,
  useAuthLogoutMutation,
} from "~/app/services/authService";

const Page: NextPageWithLayout = () => {
  const result = useGetStoreQuery({});
  // const [createStore, { isLoading }] = useCreateStoreMutation();
  const [logout, { isLoading, isSuccess }] = useAuthLogoutMutation();
  const handleCreateStore = async () => {
    console.log("testS");

    // const result = await createStore({ name: "test456" });
  };
  const handleLogout = async () => {
    const result = await logout({});
    console.log("result", result);
    // console.log("isSuccess", isSuccess, isLoading);
  };
  return (
    <div>
      store
      <div onClick={handleCreateStore}>Create store</div>
      <div onClick={handleLogout}>LogOut</div>
    </div>
  );
};
// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//     <Layout>
//       <StoreLayout>{page}</StoreLayout>
//     </Layout>
//   );
// };

export default Page;
