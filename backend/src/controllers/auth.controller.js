import bcrypt from 'bcryptjs';

export const signupController = async (req, res) => {
  const {username, email, password} = req.body;

  try {  
    // Chck everything presents
    if(!username || !email || !password){
      return res.status(400).json({success: false, error: true, message: 'All fields are required'});
    }

    // Chck if user already exists or not
    

    // Return the Response that user is being created successfully
    
  } catch (error) {
    console.log('Error in SignUp: ', error.message);
    return res.status(500).json({success: false, error: true, message: 'Internal Server Error!!!'});
  }
  
};

export const loginController = async (req, res) => {};

export const logoutController = async (req, res) => {};