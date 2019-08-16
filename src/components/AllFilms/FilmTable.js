import React from 'react';

export default function FilmTable() {
  return (
    <table>
      <thead>
        <tr className='text-gray-600'>
          <th className='py-5'>Title</th>
          <th className='py-5'>Director</th>
          <th className='py-5'>Duration</th>
          <th className='py-5'>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr className='flex py-3'>
          <td>
            <img src='' alt='' />
          </td>
          <td className='text-white'>Some Title</td>
          <td className='text-gray-600'>Some Director</td>
          <td className='text-gray-600'>Some Length</td>
          <td className='text-gray-600'>Some Year</td>
        </tr>
      </tbody>
    </table>
  );
}
