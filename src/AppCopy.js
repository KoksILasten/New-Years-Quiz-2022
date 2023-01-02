import React from "react";
import "./App.css";

class JeopardyBoxes extends React.Component {
  state = {
    boxes: [
      { id: 1, value: "90,00,10-tal", question: "[fråga]", clicked: false },
      { id: 2, value: "Eurovision", question: "[fråga]", clicked: false },
      { id: 3, value: "Tiktok", question: "[fråga]", clicked: false },
      { id: 4, value: "Film", question: "[fråga]", clicked: false },

      {
        id: 5,
        value: 200,
        question:
          "Från vilken originallåt samplade Madonna delar av sin låt Hung Up?",
        clicked: false,
      },
      {
        id: 6,
        value: 200,
        question: "Vilken svensk stad är Helena Paparizou född i?",
        clicked: false,
      },
      {
        id: 7,
        value: 200,
        question:
          "Vilken trendande netflixserie gjorde Lady Gagas låt Bloody Mary populär igen?",
        clicked: false,
      },
      {
        id: 8,
        value: 200,
        question: "Vilket populärt pojkband är med i filmerna camp rock?",
        clicked: false,
      },

      {
        id: 9,
        value: 400,
        question:
          "Vilka två kända skådespelare spelar Barbie och Ken i den nya Barbiefilmen som ska släppas nästa år?",
        clicked: false,
      },
      {
        id: 10,
        value: 400,
        question:
          "Vad heter den svenska versionen av låten Take me to your heaven av Charlotte Perrelli?",
        clicked: false,
      },
      {
        id: 11,
        value: 400,
        question: "Vilken serie blev Olivia Rodrigo känd för?",
        clicked: false,
      },
      {
        id: 12,
        value: 400,
        question:
          "Vad heter skådespelaren som sjunger låten Getcha head in the game?",
        clicked: false,
      },

      { id: 13, value: 600, question: "Vad är G6 slang för?", clicked: false },
      {
        id: 14,
        value: 600,
        question:
          "Vilken plats hamnade denna grupp på i Eurovision-finalen år 2012?",
        clicked: false,
      },
      {
        id: 15,
        value: 600,
        question: "Vilken film är associerad med den här låten?",
        clicked: false,
      },
      {
        id: 16,
        value: 600,
        question: "Vilken scen i Revenge of the sith spelas den här musiken?",
        clicked: false,
      },

      {
        id: 17,
        value: 800,
        question: "Namnge alla fem spice girls scennamn.",
        clicked: false,
      },
      {
        id: 18,
        value: 800,
        question:
          "I vilket nuvarande land utkämpades Slaget vid Waterloo år 1815?",
        clicked: false,
      },
      {
        id: 19,
        value: 800,
        question: 'Vilken Kardashian sade det kända citatet "abcdefg"?',
        clicked: false,
      },
      {
        id: 20,
        value: 800,
        question:
          "Vilken scen i filmen Prisoner of Azkaban spelas den här musiken?",
        clicked: false,
      },
    ],
  };

  handleClick = (id, question) => {
    alert(question);
    this.setState((prevState) => {
      const boxes = prevState.boxes.map((box) => {
        if (box.id === id) {
          return { ...box, clicked: true };
        }
        return { ...box };
      });
      return { boxes };
    });
  };

  render() {
    return (
      <div className="grid">
        {this.state.boxes.slice(0, 4).map((box) => (
          <div className="box" key={box.id}>
            {box.value}
          </div>
        ))}

        {this.state.boxes.slice(4, 20).map((box) => (
          <div
            className="box"
            key={box.id}
            onClick={() => this.handleClick(box.id, box.question)}
          >
            {!box.clicked && box.value}
          </div>
        ))}
      </div>
    );
  }
}

export default JeopardyBoxes;
