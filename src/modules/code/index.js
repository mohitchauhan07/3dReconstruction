import React from 'react'
import './index.css'

const Code=()=>{
    return(
        <section className={"code"}>
              <div className={'navHelper'} id = "CodeSection">

              </div>
        <div className={"Container codeContainer"}>
         
          <div className={"card codeCard1"}></div>
          <div className={"card codeCard2"}></div>
          <div className={"card codeCard3"}>
          <h1 className={"heading codeHeading"}>Code</h1>
          <p className={'para'}>{'Here is the link to our code'}</p>
          <hr className={'divider'}/>
          <div className={'displayRow codeLinkContainer'}>
              <figure className={"githubImg"}>
                  <img src={'./images/github.png'} alt={'githubIcon'}/>
              </figure>
              <a href={"https://github.com/mohitchauhan07/majorProjectWebsite.git"} target="_blank" rel="noreferrer"><button className={'btn codeBtn'}>{"Check Code"}</button></a>
          </div>
          </div>
        </div>
      </section>
    )
}

export default Code