import React, { useState } from "react";

const ModelOne = ({ showModel, setShowModel }) => {
  return (
    <>
      <div className="mdial-wrapper">
        <div className="model-container">
          <h1>STAY TUNED</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum quis
            earum quibusdam voluptas, quia quos veniam cumque minus itaque nam!
          </p>
          <br /><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laudantium neque sit accusamus. Iure dolorem rerum voluptatibus obcaecati modi dolore alias autem id, ad, odit laudantium necessitatibus sit iusto saepe.</p>
          <br /><br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel magnam quidem, rem eum similique, corrupti aspernatur harum eligendi nihil optio accusantium earum libero at velit sint vitae delectus, architecto dolore dicta quia itaque? Cum, excepturi delectus nemo laborum voluptatibus quae!</p>
                <br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quaerat cumque laudantium maiores incidunt soluta distinctio voluptates voluptate. Doloribus dolores illum, eos dolorum, tempora ducimus magnam voluptate dicta mollitia est aliquid provident assumenda, libero itaque.</p>
                <br /><br />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quidem magni sed debitis dolorum optio ratione eaque illum cumque sapiente harum, similique vitae aliquid quam odio assumenda necessitatibus est voluptatum blanditiis ab modi praesentium voluptas error? Vitae impedit numquam nisi veniam doloribus iste mollitia, neque natus accusantium, a ipsa eaque?</p>
          <button onClick={() => setShowModel(false)}>Accept It</button>
        </div>
      </div>
    </>
  );
};

export default ModelOne;
