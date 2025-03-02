import Person from '@/components/Person';

export default async function Persons(props) {

  return (
    <>
      <div className='prose'>
        <h2>{props.title}</h2>
      </div>
      <div className='grid lg:grid-cols-2 gap-16'>
        {props.persons.map((person) => (
          <li className='list-none' key={person.name}>
            <Person person={person} />
          </li>
        ))}
      </div>
    </>
  );
}

