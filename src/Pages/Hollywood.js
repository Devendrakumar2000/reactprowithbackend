import {React, useEffect, useState } from 'react'
import Card from '../Component/Card'
import SmallCard from '../Component/SmallCard';

const Hollywood = () => {
    const[data,setData]=useState([])
    useEffect(()=>{
        const url = "https://reactblogproback.herokuapp.com/api/Hollywood";
        fetch(url).then(res => res.json())
            .then(res => setData(res)  )
    },[])
    return (
        <div>
            <h1 style={{ margin: "20px 10%", display: "inline-block" }}>Hollywood</h1>
            <h1 style={{ margin: "20px 0px 20px 35%", display: "inline-block" }}>Top Posts</h1>
            <div className="main__container">
                <div className='rightbar'>
                    {
                        data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
                            <Card key={n.id}
                                articleid={n.id}
                                imgUrl={n.Image}
                                title={n.title}
                                description={n.description.slice(0, 200)}
                                fulldescription = {n.description}
                            />
                        ))
                    }
                </div>
                <div className="sidebar">
                    {
                        data.filter((article) => { return article.category === "Hollywood" }).map((n) => (
                            <SmallCard key={n.id}
                            articleid={n.id}
                            imgUrl={n.Image}
                            description={n.description.slice(0, 200)}
                            title={n.title.slice(0, 25)}
                            fulldescription = {n.description}
                            author={n.author}
                            />
                        ))
                    }
                        <div className='advertisement'>
                        <p>Advertisement</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hollywood