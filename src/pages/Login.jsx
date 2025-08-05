
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod'; 

// SchemaValidation for signup form
const signupSchema= z.object({
   emailId: z.string().email("Invalid Email"),
   password: z.string().min(8,"password shuld contain atleast 8 character")
});


function Login(){
   const {register,handleSubmit,formState: { errors },} = useForm({resolver:zodResolver(signupSchema)});

   const onSubmit=(data)=>{
    console.log(data);
   };


    return(
        <div className="min-h-screen flex justify-center items-center p-4">   {/*centering container*/}
        <div className="card w-96 bg-base-100 shadow-x">   {/*Existing Card Styling*/}
        <div className="card-body">
        <h2 className="card-title justify-center text-3xl">Social Media Platform</h2>  {/*Cenetred title */}
         <form onSubmit={handleSubmit(onSubmit)}>
            {/* Existing form fields */} 
    

       <div className="form-control mt-4">
        <label className="label mb-1">
            <span className="label-text">Email</span>
        </label>
      <input
      type="email"
      placeholder="Neel@example.com"
      className={`input input-bordered ${errors.emailId && 'input-error'}`}
       {...register('emailId')}
       />

       {errors.emailId &&(
        <span className="text-error">{errors.emailId.message}</span>
       )}
       </div>
       


       <div className="form-control mt-4">
        <label className="label mb-1">
            <span className="label-text">Password</span>
        </label>
         <input 
         type="password"
         placeholder="........"
         className={`input input-bordered ${errors.password && 'input-error'}`}
         {...register('password')}
         />
     {errors.password &&(
        <span className="text-error">{errors.password.message}</span>
     )}
 </div>

<div className="form-control mt-6 flex justify-center">
    <button
    type="submit"
    className="btn btn-primary">
        Login
    </button>
    </div>
    </form>
    </div>
    </div>
    </div>
    );
}
export default Login;


