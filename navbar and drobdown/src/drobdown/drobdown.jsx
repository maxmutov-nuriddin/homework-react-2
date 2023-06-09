import { useState } from "react";


import "./drobdown.css"

const modal = () => {
  const [drop, setdrop] = useState(false);


  const changedrop = () => {
    return setdrop(!drop)
  }
  return (
    <>
      <div className="container">
        <button onClick={changedrop}>button</button>
        <div className={`divs ${drop ? 'div' : ""}`}>
          <div className="box">
            <h1>TITLE</h1>
            <p>Флорида стала первым регионом современных США, заселённым европейцами. С тех пор во Флориде было много волн колонизации и иммиграции, в том числе переселения французов и испанцев в XVI веке, а также миграции индейцев с других регионов Юга, переселения свободных чернокожих и беглых рабов, которые в XIX веке стали известны как чёрные семинолы. Флорида находилась под колониальным правлением Испании с XVI по XIX век и ненадолго под властью Великобритании в XVIII веке (1763—1783), а в 1821 году стала «территорией» Соединённых Штатов как Территория Флорида. Два десятилетия спустя, 3 марта 1845 года, Флорида была признана 27-м штатом США.
              Флорида получила прозвище «Солнечный штат», из-за тёплого климата и большого количества солнечных дней. Хороший климат Флориды, множество пляжей и рост промышленности привлекали северных мигрантов из других штатов, международных мигрантов и просто отдыхающих ещё со времени земельного бума во Флориде в 1920-х. Разнообразное население, урбанизация и разноотраслевая экономика развивались во Флориде на протяжении всего XX века. В 2014 году Флорида с населением более 19 миллионов человек обогнала штат Нью-Йорк и стала третьим по численности населения штатом США.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default modal


