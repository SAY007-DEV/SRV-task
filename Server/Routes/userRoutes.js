import express from 'express';
const router = express.Router();
import User from '../Models/UserModel'; 


const localUsers = [
    {
        id: 1,
        fullName: "John Doe",
        email: "john@example.com",
        mobile: "+91 9876543210",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        address: "123 Main St, City",
        education: [
            {
                degree: "Master of Business Administration (MBA)",
                institution: "XYZ University",
                years: "2018 – 2020"
            }
        ]
    }
   
];


router.get('/users', async (req, res) => {
    try {
       
        const users = await User.find({});
        res.json(users);  
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({ message: error.message });
    }
});


router.get('/local-users', (req, res) => {
    res.json(localUsers);
});


router.post('/data', async (req, res) => {
  try {
    const {
      fullName,
      dateOfBirth,
      gender,
      mobile,
      email,
      aadhar,
      address,
      mobileVerified,
      emailVerified,
      aadharVerified
    } = req.body;

    
    const newUser = new User({
      fullName,
      dateOfBirth,
      gender,
      mobile,
      email,
      aadhar,
      address,
      mobileVerified,
      emailVerified,
      aadharVerified
    });

    
    const savedUser = await newUser.save();
    
    res.status(200).json({
      success: true,
      message: 'User data saved successfully',
      data: savedUser
    });

  } catch (error) {
    console.error('Error saving user data:', error);
    res.status(500).json({
      success: false,
      message: 'Error saving user data',
      error: error.message
    });
  }
});


router.get('/', (req, res) => {
    res.send('User routes working');
});


router.get('/user',(req,res) =>{

    
})


export default router; 