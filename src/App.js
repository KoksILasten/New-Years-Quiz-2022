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
        question:
          "Vilken film är associerad med låten Im a Beliver av Smash Mouth?",
        clicked: false,
      },

      {
        id: 9,
        value: 400,
        question: "Vad handlar låten Pumped up kicks av Foster the People om?",
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
        question: "Vilket år blev Musical.ly uppköpt av Tiktok?",
        clicked: false,
      },
      {
        id: 12,
        value: 400,
        question:
          "Vad kallas den Mexikanska högtiden som firas i Disneyfilmen Coco?",
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
        question: "Vilken serie blev Olivia Rodrigo känd för?",
        clicked: false,
      },
      {
        id: 16,
        value: 600,
        question:
          "Vad heter planeten som Anakin Skywalker och Obi-Wan Kenobi slåss på i filmen Star Wars: Revenge of the Sith?",
        clicked: false,
      },

      {
        id: 17,
        value: 800,
        question:
          "Vilka två kända skådespelare spelar Barbie och Ken i den nya Barbiefilmen som ska släppas nästa år?",
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
        question:
          "Vilken känd egirl/porrstjärna jobbar numera med Oliver Tree?",
        clicked: false,
      },
      {
        id: 20,
        value: 800,
        question: "Vilket år släpptes den första James Bond-filmen Dr. No?",
        clicked: false,
      },
    ],
    currentQuestion: null,
  };

  handleClick = (id) => {
    this.setState((prevState) => {
      const boxes = prevState.boxes.map((box) => {
        if (box.id === id) {
          return { ...box, clicked: true };
        }
        return box;
      });
      return {
        boxes,
        currentQuestion: {
          value: boxes[id - 1].value,
          question: boxes[id - 1].question,
        },
      };
    });
  };

  handleClose = () => {
    this.setState({ currentQuestion: null });
  };

  render() {
    return (
      <div>
        <div className="grid">
          {this.state.boxes.map((box) => (
            <div
              className="box"
              key={box.id}
              onClick={() => this.handleClick(box.id)}
            >
              {!box.clicked && box.value}
            </div>
          ))}
        </div>
        {this.state.currentQuestion && (
          <div className="question-popup">
            <div className="question-value">
              {this.state.currentQuestion.value} Poäng
            </div>
            <div className="question">
              {this.state.currentQuestion.question}
            </div>
            <button onClick={this.handleClose}>Close</button>
          </div>
        )}
      </div>
    );
  }
}

export default JeopardyBoxes;
