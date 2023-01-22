import { faEye, faFileAlt, faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

function CustomCard() {
   return (
      <div className="card mt-2">
         <div className="card-header">
            <div className="card-title">
               <div className="d-flex justify-content-between">
                  <div className="p-2">
                     <h5>Employee List</h5>   
                  </div>
                  <div className="p-2">
                     <Link href={'/AddEmployee'} className="btn btn-primary">Add Employee</Link>
                  </div>
               </div>
            </div>
         </div>
         <div className="card-body">
            <table className="table table-striped">
               <thead>
                  <tr>
                     <th scope="col" className="text-center align-middle">SL</th>
                     <th scope="col" className="text-center align-middle">Name</th>
                     <th scope="col" className="text-center align-middle">Email</th>
                     <th scope="col" className="text-center align-middle">Phone No</th>
                     <th scope="col" className="text-center align-middle">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <th className="text-center align-middle">1</th>
                     <td className="text-center align-middle">Robin</td>
                     <td className="text-center align-middle">robin@gmail.com</td>
                     <td className="text-center align-middle">01788916805</td>
                     <td className="text-center align-middle">
                        <Link href={'/edit'} className="btn btn-success m-1">
                           <FontAwesomeIcon icon={faFileAlt} /> Edit
                        </Link>
                        <Link href={'/view'} className="btn btn-warning m-1">
                           <FontAwesomeIcon icon={faEye} /> View
                        </Link>
                        <Link href={'/delete'} className="btn btn-danger m-1">
                           <FontAwesomeIcon icon={faTrashAlt} /> Delete
                        </Link>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   )
}
export default CustomCard;