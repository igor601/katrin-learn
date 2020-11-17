import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <input type="text" onChange={() => {}}></input>
      {/* прсто запомни входящие данные */}
      <button
        onClick={() => alert("я кнопка")}
        style={{ width: 100, height: 20, backgroundColor: "blue" }}
      >
        кнопка
      </button>
      <div style={styles.container}>
        <p>для текста</p>
        <img
          style={{ width: 100, height: 100 }}
          src={"https://picsum.photos/id/237/200/300"}
        />
        <img style={styles.img} scr={logo}>
          {/* локальные картинки вызываются через require('путь к картинке') */}
        </img>
        {/* прсто запомни исходящие данные */}
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "yellow",
            borderRadius: 50,
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "green",
            borderRadius: 50,
          }}
        ></div>
        <div
          style={{
            width: 100,
            height: 100,
            backgroundColor: "black",
            borderRadius: 50,
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            justifyContent: "space-around",
            alignItems: "center",
            borderRadius: 50,
          }}
        >
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "HotPink",
              borderRadius: 10,
            }}
          ></div>
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "Snow",
              borderRadius: 10,
            }}
          ></div>
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: "Olive",
              borderRadius: 10,
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 1000,
    height: 500,
    backgroundColor: "green",
    display: "flex",
    flexDirection: "row",
    flexWrap: "nowrap",
    justifyContent: "space-around",
    alignItems: "center",
  },
};

export default App;
