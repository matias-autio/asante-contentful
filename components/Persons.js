import Person from '@/components/Person';

export default async function Persons(props) {

  return (
    <>
      <div className='prose text-center'>
        <h3>{props.title}</h3>
      </div>
      <div className='max-w-screen-xl mx-auto'>
        <ul className='grid lg:grid-cols-2 gap-16'>
          {props.persons.map((person) => (
            <li className='list-none' key={person.name}>
              <Person person={person} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

