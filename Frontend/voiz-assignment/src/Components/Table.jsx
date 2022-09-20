import React from 'react'

export const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>S.No</th>
                    <th>label</th>
                    <th>Value</th>
                </tr>
            </thead>
            <tbody>
                {data.map((el, key) => {
                    return (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td id="label">{el.label}</td>
                            <td id="value">{el.value}</td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}
