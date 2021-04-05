const router = require('express').Router()
const chalk  =  require('chalk');

router.use('/api/users' , require('./users'))
router.use('/api/departments' ,require('./departments'))
router.use('/api/departmentsHeads' , require('./departmentHeads'))
router.use('/api/employee' , require('./employees'))
router.use('/api/task' , require('./tasks'))
router.use('/api/reports' , require('./reports'))
console.log(chalk.red('all apis ready')) 

module.exports = router ;