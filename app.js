const containerOne = document.getElementById('react-container-1');
ReactDOM.render("Hello! Welcome to React",containerOne);

// Functional component
const Container = () =>{
    return React.createElement(`div`,null,`Hey Kalvians! Welcome to React Learning. This is functional component`,
       React.createElement(`div`,null,`Let's rock and roll`)
       );
}
const containerTwo = document.getElementById('react-container-2');
ReactDOM.render(React.createElement(Container),containerTwo);




class ReactContainer extends React.Component{
      render(){
          return React.createElement(`div`,null,`Hey Kalvians`,
          React.createElement(`div`,null,`Let's rock and roll with class component`)
          );
      }
    
  }
  const containerThree = document.getElementById('react-container-3');
  ReactDOM.render(React.createElement(ReactContainer),containerThree);