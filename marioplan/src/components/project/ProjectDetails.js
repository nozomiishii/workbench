import React from 'react';

const ProjectDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className='container section project-details'>
      <div className='card z-depth-0'>
        <div className='card-content'>
          <span className='card-title'>Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam
            facere optio minus nulla repellendus adipisci laborum beatae
            reprehenderit praesentium, placeat maiores deleniti minima, quasi
            consequuntur enim veritatis culpa nam dolores?
          </p>
        </div>
        <div className='card-action grey lighten-4 gray text'>
          <div>Posted by the Net Ninja</div>
          <div>2nd Septemver, 2am</div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
