import { useState } from 'react'
import { IMood } from '../models/mood'
import { SubmittingIcon } from './submittingIcon'
const defaultValues = {
  date: '',
  mood: 0.5,
  body: 0.5,
  mind: 0.5,
  exercise: false,
  social: false,
}
export const MoodForm = () => {
  const [values, setValues] = useState<IMood>(defaultValues)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const onChange = (e: any) => {
    setValues((currValues) => ({
      ...currValues,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = async () => {
    setIsSubmitting(true)
    await fetch('/api/mood', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    setValues(defaultValues)
    setIsSubmitting(false)
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: 600,
      }}
    >
      {/* Date */}
      <label>Date</label>
      <input name='date' type='date' value={values.date} onChange={onChange} />

      <label>Mood</label>
      <input
        name='mood'
        type='range'
        min={0}
        max={1}
        step={0.25}
        value={values.mood}
        onChange={onChange}
      />
      <label>Body</label>
      <input
        name='body'
        type='range'
        min={0}
        max={1}
        step={0.25}
        value={values.body}
        onChange={onChange}
      />
      <label>Mind</label>
      <input
        name='mind'
        type='range'
        min={0}
        max={1}
        step={0.25}
        value={values.mind}
        onChange={onChange}
      />
      <label>Exercise</label>
      <input
        id='exercise'
        name='exercise'
        type='checkbox'
        checked={values.exercise}
        onChange={(e) =>
          setValues((currValues) => ({
            ...currValues,
            exercise: e.target.checked,
          }))
        }
      />

      <label>Social</label>
      <input
        id='social'
        name='social'
        type='checkbox'
        checked={values.social}
        onChange={(e) =>
          setValues((currValues) => ({
            ...currValues,
            social: e.target.checked,
          }))
        }
      />

      {/* Checkbox */}
      <label>Note</label>
      <input name='note' type='text' value={values.note} onChange={onChange} />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          padding: '20px 0',
        }}
      >
        <button onClick={onSubmit}>
          {isSubmitting ? <SubmittingIcon /> : 'Submit'}
        </button>
      </div>
    </div>
  )
}
