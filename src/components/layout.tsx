export default function Layout({ children }: any) {
  return (
    <>
      <div> root layout</div>
      <main>{children}</main>
    </>
  );
}
