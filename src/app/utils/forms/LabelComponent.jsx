const LabelNote = (props) => {
  const { bgcolor, note, max } = props;

  const containerStyles = {
    height: 20,
    width: '50px',
    backgroundColor: '#e0e0de',
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: '100%',
    width: `100%`,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    transition: 'width .1s ease-in-out',
  };

  const labelStyles = {
    padding: 5,
    margin: 'auto',
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${note.toFixed(0)}/${max}`}</span>
      </div>
    </div>
  );
};

export default LabelNote;
