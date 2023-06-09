import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-sm-7 ">
          <h1 className='text-center'>Todo app</h1>

            <form action="">
            <div className="input-group mb-3">
    <input type="text" className="form-control" placeholder="Your Email"/>
    <div className="input-group-append">
      <button type="submit" className="input-group-text">Save</button>
    </div>
  </div>
            </form>

            <table className='table table-border'>
              <thead>
                <tr>
                  <th>Snoss</th>
                  <th>Title</th>
                  <th>Action</th>
                </tr>

              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </main>
  )
}
