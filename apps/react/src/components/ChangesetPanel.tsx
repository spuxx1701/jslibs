import { Changeset } from '@spuxx/browser-utils';
import React, { useCallback, useRef, useState } from 'react';

interface Address {
  name: string;
  street: string;
  city: string;
  zip: string;
  country: string;
}

export function ChangesetPanel(): React.ReactElement {
  const form = useRef<HTMLFormElement | null>(null);
  const [address, setAddress] = useState<Address>({
    name: '',
    street: '',
    city: '',
    zip: '',
    country: '',
  });
  const [name, setName] = useState('');
  const changeset = new Changeset<Address>(
    { ...address },
    {
      validate: () => {
        const isValid = form.current?.checkValidity();
        if (!isValid) {
          alert('Form is invalid.');
        }
        return isValid;
      },
    },
  );

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await changeset.save();
    setAddress(changeset.current);
  }, []);

  const handleRollback = useCallback(() => {
    changeset.rollback(setAddress);
  }, []);

  return (
    <>
      <h2>Changeset</h2>
      <pre>Actual: {JSON.stringify(address, null, 2)}</pre>
      <form ref={form} onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={name}
            onChange={(e) => changeset.set('name', e.target.value, setName)}
          />
        </label>
        <button type="submit">Save</button>
        <button type="button" onClick={handleRollback}>
          Roll back
        </button>
      </form>
    </>
  );
}
