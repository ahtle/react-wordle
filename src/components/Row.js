export default function Row(props) {
  if (props.guess) {
    return (
      <div className="row past">
        {props.guess.map((item, i) => {
          return (
            <div key={i} className={item.color}>
              {item.key}
            </div>
          );
        })}
      </div>
    );
  }

  if (props.currentGuess) {
    let letters = props.currentGuess.split('');

    return (
      <div className="row current">
        {letters.map((l, i) => {
          return (
            <div key={i} className="filled">
              {l}
            </div>
          );
        })}
        {[...Array(5 - letters.length)].map((_, i) => {
          return <div key={i}></div>;
        })}
      </div>
    );
  }

  return (
    <div className="row">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
