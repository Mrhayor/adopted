import Pet from "./Pet";

const Results = ({ pets }) => {
  return (
    <div className="search">
      _
      {!pets.length ? (
        <h1>No Pets Found</h1>
      ) : (
        pets.map((pet) => (
          <Pet
            // {...pet}
            animal={pet.animal}
            name={pet.name}
            breed={pet.name}
            images={pet.name}
            location={`${pet.city}, ${pet.state}`}
            key={pet.id}
          />
        ))
      )}
    </div>
  );
};

export default Results;
