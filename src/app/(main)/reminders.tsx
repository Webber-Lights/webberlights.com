
export default function Reminders() {
  return (
    <section className='bg-red-500'>
    <div className='max-w-5xl mx-auto mb-8 p-8 justify-center bg-red-500'>
        <h2 className=' text-4xl justify-center font-bold text-white'>Reminders</h2>
        <ul className='list-disc list-inside mt-4 text-left'>
            <li>Please turn off your headlights while watching the show to avoid disturbing other visitors.</li>
            <li>For the safety of all guests, please remain in your vehicle during the show.</li>
            <li>Be courteous to other visitors and avoid blocking driveways or fire hydrants.</li>
            <li>Follow any instructions given by our staff or volunteers on site.</li>
            <li>Enjoy the show and have a wonderful holiday season!</li>
        </ul>
    </div>
    </section>
  );
}