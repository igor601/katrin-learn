import logo from "./logo.svg";
import card1 from "./images/card.png";
import card2 from "./images/card2.png";
import card3 from "./images/card3.png";
import card4 from "./images/card4.png";
import img1 from "./images/image1.png";
import img2 from "./images/image2.png";
import img3 from "./images/image3.png";
import "./App.css";

function App() {
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div
          onClick={() => alert("нажатие кнопки")}
          style={styles.leftContainer}
        >
          <p style={styles.bigText}>WebCrypt</p>
        </div>

        <p style={styles.text1}> HOME </p>
        <p style={styles.text1}> PARTNERS </p>
        <p style={styles.text1}> BENEFIST </p>
        <button onClick={() => alert("нажатие кнопки")} style={styles.button}>
          <p style={styles.text2}> CREATE PORTFOLIO </p>
        </button>
      </div>
      {/*  */}
      <div style={{ paddingLeft: 122 }}>
        <p style={styles.text3}>
          WebCrypt is the next level
          <br />
          platform for portfolio tracking and
          <br />
          management of your blockchain assets
        </p>
        <p style={styles.text4}>Self-sufficient. Absolutely Free. </p>
        <button onClick={() => alert("нажатие кнопки")} style={styles.button2}>
          <p style={styles.textButton2}>Try Now!</p>
        </button>
      </div>
      {/*  */}
      <div style={styles.container2}>
        <p style={styles.text5}>Our Partners</p>
        <div style={styles.imgContainer}>
          <img style={styles.img} src={card1}></img>
          <img style={styles.img} src={card2}></img>
          <img style={styles.img} src={card3}></img>
          <img style={styles.img} src={card4}></img>
        </div>
      </div>
      <div style={styles.container3}>
        <div style={styles.leftContainer2}>
          <p style={{ fontSize: 28, color: "#000", paddingTop: 100 }}>
            Auto Sync
          </p>
          <p style={{ fontSize: 25, color: "#000", textAlign: "left" }}>
            Synchronize all your wallets and cryptocurrency <br />
            exchangers on a single platform
          </p>
          <p style={{ fontSize: 16, color: "#5D5D5D", textAlign: "left" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br />
            Ut enim ad minim veniam, quis nostrud exercitation ullamco.
          </p>
          <button
            onClick={() => alert("нажатие кнопки")}
            style={styles.button3}
          >
            <p style={{ color: "#FFF", fontSize: 16 }}>Sync Your Accounts</p>
          </button>
        </div>
        <img style={{ width: 700, height: 400 }} src={img1}></img>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 550,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-around",
          backgroundColor: "#DCDCDC",
        }}
      >
        <div>
          <img style={{ width: 440, height: 430 }} src={img2}></img>
        </div>
        <div>
          <p style={{ fontSize: 26, color: "#000" }}>Multiple Portfolios</p>
          <p style={{ fontSize: 20, color: "#000" }}>
            Create as many portfolios as you want to keep track <br /> on all of
            your blockchain assets in one place
          </p>
          <p style={{ fontSize: 16, color: "#5D5D5D" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed <br />
            do eiusmod tempor incididunt ut labore et dolore magna <br />
            aliqua. Ut enim ad minim veniam.
          </p>
          <p style={{ fontSize: 22, color: "#753DFE" }}>
            Create Your Portfolio
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: 550,
          marginTop: 195,
          paddingTop: 100,
          paddingLeft: 122,
          backgroundColor: "#F4F2FF",
        }}
      >
        <div
          style={{
            width: "50%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <p style={{ fontSize: 26, color: "#000" }}>Cross Device</p>
          <p style={{ fontSize: 20, color: "#000" }}>
            WebCrypt is available for free on iOS, Android
            <br />
            and PC/Mac. Access your portfolios from
            <br /> everywhere at any time!
          </p>
          <p style={{ fontSize: 16, color: "#5D5D5D" }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <p style={{ fontSize: 22, color: "#753DFE" }}>Get Started Now</p>
        </div>
        <img style={{ width: 565, height: 385 }} src={img3}></img>
      </div>
      <div
        style={{
          backgroundColor: "#753BCE",
          display: "flex",
          flexDirection: "column",
          height: 395,
          width: 1400,
          alignItems: "center",
          alignContent: "center",
          paddingTop: 100,
        }}
      >
        <p style={{ fontSize: 30, color: "#FFF" }}>Synchronize your Cryptos</p>
        <p style={{ fontSize: 22, color: "#FFF", marginTop: 3 }}>
          Create Your New Portfolio Now
        </p>
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <input
            style={{ width: 500, height: 48, paddingLeft: 20, fontSize: 14 }}
            placeholder="Enter Your E-mail"
          ></input>
          <div
            onClick={() => alert("нажатие кнопки")}
            style={{ width: 200, height: 52, backgroundColor: "#753DFE" }}
          >
            <p style={{ fontSize: 18, color: "#FFF", textAlign: "center" }}>
              Create Portfolio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: 1400,
    height: 5000,
    backgroundColor: "#DCDCDC",
    // display: "flex",
  },
  img: { width: 276, height: 228 },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingLeft: 100,
    paddingRight: 100,
    paddingTop: 30,
  },
  button: {
    backgroundColor: "#6881FF",
    borderRadius: 10,
    width: 195,
    justifyContent: "space-around",
    borderWidth: 0,
    height: 35,
    display: "flex",
    alignItems: "center",
  },
  leftContainer: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-start",
  },
  bigText: { fontSize: 22, color: "#000" },
  text1: { fontSize: 16, color: "#000" },
  text2: { fontSize: 16, color: "#FFF" },
  text3: { fontSize: 26, color: "#000", textAlign: "left" },
  text4: { fontSize: 18, color: "#000", textAlign: "left" },
  button2: {
    backgroundColor: "#753DFE",
    borderRadius: 4,
    width: 165,
    justifyContent: "space-around",
    borderWidth: 0,
    height: 52,
    display: "flex",
  },
  textButton2: { color: "#FFF", fontSize: 18 },
  text5: {
    fontSize: 16,
    color: "#000",
    textAlign: "center",
    paddingTop: 100,
  },
  img: { width: 275, height: 225 },
  container2: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
  imgContainer: {
    justifyContent: "space-around",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: 1200,
  },
  container3: {
    backgroundColor: "#F4F2FF",
    width: 1277,
    height: 550,
    marginTop: 195,
    paddingLeft: 122, // TODO !!!
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  leftContainer2: { display: "flex", flexDirection: "column", width: "50%" },
  button3: {
    backgroundColor: "#753DFE",
    borderRadius: 4,
    width: 165,
    justifyContent: "space-around",
    borderWidth: 0,
    height: 52,
    display: "flex",
  },
};

export default App;
