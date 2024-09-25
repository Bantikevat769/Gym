import "./WorkoutSessions.css";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="workout_wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          Explore our best workout sessions that will help you achieve your
          fitness goals.
        </p>
        <img src="/imge2.png" alt="workout" className="workout_image" />
      </div>
      <div className="workout_wrapper">
        <h1>FEATURED BOOTCAMPS</h1>
        <p>
          Check out our bootcamps for intense, focused training sessions that
          challenge your body.
        </p>
        <div className="bootcamps">
          {[1, 2, 3, 4].map((_, index) => (
            <div key={index}>
              <h4>Bootcamp Session {index + 1}</h4>
              <p>
                A challenging and dynamic workout session to boost your
                strength, endurance, and fitness level.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
