import React from 'react'
import { observer, inject } from 'mobx-react'
import "../styles/Header.css"
import "../styles/Main.css"
import "../styles/Footer.css"

@inject('userStore')
@observer
class Main extends React.Component{
  render(){
    const { userStore } = this.props
    const { usermail } = userStore
    return (<div>
      <header>
        <h1>Best NiziU</h1>
        <div className="bottom">
          <h3>{usermail}</h3>
          <p> 
            NiziU 영상 모아보기
          </p>
          <nav>
            <ul>
              <li>유튜브</li>
              <li>페이스북</li>
              <li>인스타그램</li>
              <li>트위터</li>
              <li>이메일</li>
            </ul>
          </nav>
        </div>
      </header>
    
      <main>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h5>NiziU 『Make you happy』 M/V</h5>
              <h6>JYP Entertainment</h6>
            </div>
            <div className="movie__video">
              <iframe width="640" height="460" src="https://www.youtube.com/embed/QW28YKqdxe0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h5>[NIZI Project] 最終対決 マコチーム Make you happy NiziU</h5>
              <h6>Rainbow Factory</h6>
            </div>
            <div className="movie__video">
              <iframe width="640" height="460" src="https://www.youtube.com/embed/QO60VZHh55s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </section>
        <section className="movie">
          <div className="wrapper">
            <div className="movie__header">
              <h5>[NiziU]生放送で音を外したことを告白するマユカちゃん</h5>
              <h6>candy girl</h6>
            </div>
            <div className="movie__video">
              <iframe width="640" height="460" src="https://www.youtube.com/embed/X6H_l5MmMoQ" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
          </div>
        </section>
      
        <footer>
          <p><strong>BEST VIDEO</strong> BY <strong>Saint Park</strong></p>
        </footer>
      </main>
      </div>)
    }
  }

export default Main