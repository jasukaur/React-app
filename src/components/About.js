import React, { useState } from 'react'

export default function About() {
    const [mystyle, setMyStyle] =useState({
        color: 'black',
        backgroundColor: 'white'
    })

    const [btntext, setBtnText] = useState("Enable Light Mode");

const toggleStyle = () => {
    if(mystyle.color === 'white'){
        setMyStyle({
            color: 'black',
            backgroundColor: 'white'
        })
        setBtnText("Enable Dark Mode");
    }
    else{
        setMyStyle({
            color: 'white',
            backgroundColor: 'black'
        })
        setBtnText("Enable Light Mode");
    }
}
  return (
    <div className = "container">
        <h1 style={mystyle}>About Us </h1>
        <div className="accordion" id="accordionExample" >
        <div className="card" >
            <div className="card-header" id="headingOne">
            <h2 className="mb-0">
                <button className="btn btn-link" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Collapsible Group Item #1
                </button>
            </h2>
            </div>

            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
            <div className="card-body" style={mystyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingTwo">
            <h2 className="mb-0">
                <button className="btn btn-link collapsed" style={mystyle} type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Collapsible Group Item #2
                </button>
            </h2>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
            <div className="card-body" style={mystyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        <div className="card">
            <div className="card-header" id="headingThree">
            <h2 className="mb-0">
                <button className="btn btn-link collapsed" type="button" style={mystyle} data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Collapsible Group Item #3
                </button>
            </h2>
            </div>
            <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
            <div className="card-body" style={mystyle}>
                Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
            </div>
            </div>
        </div>
        </div>

        {/* No need for this button now
        <button onClick={toggleStyle} className="btn btn-primary my-3">Enable Light Mode</button>   */}
    </div>
  )
}
