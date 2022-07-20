//  Navbar Component

function Navbar() {
  return (
    <div>
      <h1 className="bg-red">Header</h1>
    </div>
  );
}

//  MAin  Component

function MainContent() {
  return (
    <main className="bg-blue">
      <h1>Hello from the JS FILE</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, tempore.
      </p>
    </main>
  );
}

//  Basic React Server

const myJSX = (
  <div>
    <Navbar />
    <MainContent />
  </div>
);


const elementir = <h1 className="juas">Hello from the JS FILE</h1>;

console.log(elementir.props);

ReactDOM.render(elementir, document.getElementById("root"));
