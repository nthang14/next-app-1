import {
  useGetStoreQuery,
  useCreateStoreMutation,
} from "~/app/services/authService";
export default function ListStore() {
  const result = useGetStoreQuery({});
  console.log("result", result);
  const [createStore, { isLoading }] = useCreateStoreMutation();
  const handleCreateStore = async () => {
    const result = await createStore({ name: "test456" });
  };
  return (
    <div>
      store
      <div onClick={handleCreateStore}>Create store</div>
    </div>
  );
}
