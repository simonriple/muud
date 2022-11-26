import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { MoodForm } from '../modules/moodForm'

function Register() {
  return (
    <>
      <h1>How are you feeling today?</h1>
      <MoodForm />
    </>
  )
}
export default withPageAuthRequired(Register)
