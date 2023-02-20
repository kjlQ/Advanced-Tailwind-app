import Header from "./Header";
function Layout({ children }) {
  return (
    <main>
      <Header />
      <section>{children}</section>
    </main>
  );
}
export default Layout;
