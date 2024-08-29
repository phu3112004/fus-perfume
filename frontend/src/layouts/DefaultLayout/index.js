import Header from "../component/Header/Header";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div>{children}</div>
    </div>
  );
}

export default DefaultLayout;
