
import './App.css'
import Nav from './components/Nav'
import Head from './components/heading/Head'
function App() {

  let items = [
    {
      itemName:" car",
      itemColor: "blue",
      title: "this is CAR"
    },
    {
      itemName: "Bike",
      itemColor: "Black",
      title: "this is BIKE"
    },
    {
      itemName: "Jeep",
      itemColor: "Green",
      title: "this is JEEP "
    }
  ];
  return (
    <>
      <Head title={items[0].title} />
      <Nav name={items[0].itemName} color={items[0].itemColor} />
      <Head title={items[1].title} />
      <Nav name={items[1].itemName} color={items[1].itemColor} />
      <Head title={items[2].title} />
      <Nav name={items[2].itemName} color={items[2].itemColor} />
    </>
  )
}

export default App
