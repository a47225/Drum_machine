import React from 'react';

class DrumMachine extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: 'Press a key or click a button to play a sound.'
        }
        this.playSound = this.playSound.bind(this);
        this.setDisplay = this.setDisplay.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', (e) => {
            const key = e.key.toUpperCase();
            const sound = document.getElementById(key);
            if(sound) {
                sound.currentTime = 0;
                sound.play();
                switch(key) {
                    case 'Q':
                        this.setDisplay({target: {id: 'Heater 1'}});
                        break;
                    case 'W':
                        this.setDisplay({target: {id: 'Heater 2'}});
                        break;
                    case 'E':
                        this.setDisplay({target: {id: 'Heater 3'}});
                        break;
                    case 'A':
                        this.setDisplay({target: {id: 'Heater 4'}});
                        break;
                    case 'S':
                        this.setDisplay({target: {id: 'Clap'}});
                        break;
                    case 'D':
                        this.setDisplay({target: {id: 'Open HH'}});
                        break;
                    case 'Z':
                        this.setDisplay({target: {id: 'Kick n Hat'}});
                        break;
                    case 'X':
                        this.setDisplay({target: {id: 'Kick'}});
                        break;
                    case 'C':
                        this.setDisplay({target: {id: 'Closed HH'}});
                        break;
                    default:
                        break;
                }
            }
        });
    }

    playSound(e) {
        const sound = e.target.firstChild;
        sound.currentTime = 0;
        this.setDisplay(e);
        sound.play();
    }
    setDisplay(e) {
        if(e.type === 'mouseleave') {
            const displayText = document.getElementById('display-text');
            displayText.classList.remove('fade-in');
            setTimeout(() => {displayText.classList.add('fade-in')},100);
            return this.setState({display: 'Press a key or click a button to play a sound.'});
        }
        this.setState({
            display: e.target.id.split('_').join(' ')
        })
    }

    render() {
        return (
            <div id="drum-machine" className="drum-machine">
                <div id="display">
                    <h2 id="display-text"className="fade-in">{this.state.display}</h2>
                </div>
                <div id="keyboard" onMouseLeave={this.setDisplay}>
                    <button className="drum-pad Heater" id="Heater_1" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" className="clip" id="Q"></audio>Q</button>
                    <button className="drum-pad Heater" id="Heater_2" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" className="clip" id="W"></audio>W</button>
                    <button className="drum-pad Heater" id="Heater_3" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" className="clip" id="E"></audio>E</button>
                    <button className="drum-pad Heater" id="Heater_4" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" className="clip" id="A"></audio>A</button>
                    <button className="drum-pad Clap" id="Clap" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" className="clip" id="S"></audio>S</button>
                    <button className="drum-pad HH" id="Open_HH" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" className="clip" id="D"></audio>D</button>
                    <button className="drum-pad Kick" id="Kick_n'_Hat" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" className="clip" id="Z"></audio>Z</button>
                    <button className="drum-pad Kick" id="Kick" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" className="clip" id="X"></audio>X</button>
                    <button className="drum-pad HH" id="Closed_HH" onClick={this.playSound} onMouseOver={this.setDisplay}><audio src="https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" className="clip" id="C"></audio>C</button>
                </div>
            </div>
        )
    }
}

export default DrumMachine;