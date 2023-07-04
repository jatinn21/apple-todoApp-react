import { useState } from "react";
import Todo_main_list from "./TodoList_body";

const ParentBody = () => {
  let [title, setTitle] = useState("Reminder");
  let [userTitle, setUserTitle] = useState("Reminder");

  let color1 = document.querySelector(`.borderColor1`);
  let color2 = document.querySelector(`.borderColor2`);
  let color3 = document.querySelector(`.borderColor3`);
  let color4 = document.querySelector(`.borderColor4`);

  function closeOptionBox() {
    document.querySelector(".OptionsBox").style.display = "none";
  }

  function colorClicked(colorNumber) {
    // Naive Method or old School Method , individually making their BorderWidth = '0px';
    // color1.style.borderWidth = "0px";
    // color2.style.borderWidth = "0px";
    // color3.style.borderWidth = "0px";
    // color4.style.borderWidth = "0px";

    // Second Approach as querySelectorAll will give us an object and we can't use map method of object so we have used foreach method
    let a = document.querySelectorAll(`.color_list_div`);
    let colorList = ["black", "#ff7f00", "#b14bc9", "#189ddf", "#ff2968"];
    a.forEach((el, key) => {
      el.style.borderWidth = "0px";
    });
    console.log(`now the color is : ${colorList[colorNumber - 1]}`);

    // Changing the Color
    document.querySelectorAll(".text__color").forEach((el) => {
      el.style.color = `${colorList[colorNumber - 1]}`;
    });

    document.querySelector(`.borderColor${colorNumber}`).style.borderWidth =
      "1px";
    document.querySelector(".OptionBox__title").style.color =
      "black !important";
  }
  return (
    <div className="container">
      <section className="header">
        <span className="title text__color">{title}</span>
        <abbr title="Click to view options.">
          <span
            className="options text__color"
            onClick={() => {
              document.querySelector(".OptionsBox").style.display = "flex";
            }}
          >
            Options
          </span>
        </abbr>
      </section>
      <section className="OptionsBox">
        <div className="parentContainer">
          <div className="header_OptionBox center colorNumber">
            <input
              className="OptionBox__title center"
              value={userTitle}
              style={{ color: "black" }}
              onChange={(event) => {
                setUserTitle(event.target.value);
              }}
            />
          </div>
          <div className="middle_OptionBox">
            <span className="middle_OptionBox_title">List Color</span>
            <span className="middle_OptionBox_color_lists">
              <span
                className="color_list_div center borderColor1"
                onClick={() => {
                  colorClicked(1);
                }}
              >
                <span className="color_list color1"></span>
              </span>
              <span
                className="color_list_div center borderColor2"
                onClick={() => {
                  colorClicked(2);
                }}
              >
                <span className="color_list color2"></span>
              </span>
              <span
                className="color_list_div center borderColor3"
                onClick={() => {
                  colorClicked(3);
                }}
              >
                <span className="color_list color3"></span>
              </span>
              <span
                className="color_list_div center borderColor4"
                onClick={() => {
                  colorClicked(4);
                }}
              >
                <span className="color_list color4"></span>
              </span>
              <span
                className="color_list_div center borderColor5"
                onClick={() => {
                  colorClicked(5);
                }}
              >
                <span className="color_list color5"></span>
              </span>
            </span>
          </div>
          <span className="footer_OptionBox center">
            <span
              className="Delete_Btn"
              id="OptionBox_Cancel_btn"
              title="Delete Task"
              onClick={() => {
                closeOptionBox();
              }}
            >
              Cancel
            </span>
            <span
              className="Done_Btn"
              title="Submit Task"
              id="OptionBox_Done_btn"
              onClick={() => {
                setTitle(userTitle);
                closeOptionBox();
                setInterval(() => {
                  let descColor = document.querySelector(".title").style.color;
                  // document.querySelectorAll(".task__desc").forEach((ele) => {
                  //   ele.style.color = descColor;
                  // });
                  document.querySelectorAll(".text__color").forEach((ele) => {
                    ele.style.color = descColor;
                  });
                }, 0);
              }}
            >
              Done
            </span>
          </span>
        </div>
      </section>
      <Todo_main_list />
      <section className="Footer center">
        Made by : &nbsp;
        <a
          className="footerLink text__color"
          href="https://jatiin.netlify.app"
          target="blank"
        >
          Jatin Sharma
        </a>
      </section>
    </div>
  );
};

export default ParentBody;
