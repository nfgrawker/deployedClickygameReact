import React from "react";
import "./Clickbody.css";
import Navbar from "../Navbar";
import ImageCard from '../ImageCard';
import images from '../../info.json';

class Clickbody extends React.Component{
    state = {
        score:0,
        topscore:0,
        images:images,
        tempList:images,
        newList:[],
        clickedImages:[]
    };

    componentDidMount() {
        this.randomOutput()
    }
    clickerFunction = (event)=>{
        console.log(event)
      if(this.state.clickedImages.includes(event.id)){
        this.setState({score:0})
        alert("You have already guessed this")
        this.setState({clickedImages:[]})
      }
      else if (!this.state.clickedImages.includes(event.id)){
          const clicked = [...this.state.clickedImages]
          clicked.push(event.id)
          console.log(clicked)
          this.setState({score: this.state.score+1})
          this.setState({clickedImages:clicked})
          if(this.state.score >= this.state.topscore){
              this.setState({topscore:this.state.score+1})
          }

      }
      this.randomOutput()
    }
    randomOutput = ()=>{
      const newList = []
      const temp = [...images]
      while(newList.length < this.state.images.length){
        let randNum = Math.floor(Math.random()*temp.length)
        newList.push(temp.splice(randNum,1)[0])
      }
      this.setState({newList: newList, tempList: images},)
    }
    render(){
        return(
          <div className="wrapper">
            <Navbar score={this.state.score} totalscore={this.state.topscore}/>
            <div className="cards">
              {this.state.newList.map((image)=><ImageCard key={image.id} id={image.id} name={image.name} image={image.image} fun={this.clickerFunction}/>)}
            </div>
          </div>
        )
    }

}

export default Clickbody;
