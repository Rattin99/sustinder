
const UserDetails = ({formData,handleChange,handleSubmit}) => {
    return (
        <form>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="department">Department:</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="department" name="department" value={formData.department} onChange={handleChange} required>
                <option value="Computer Science and Engineering"> Computer Science and Engineering</option>
                <option value="Chemical Engineering & Polymer Science">Chemical Engineering & Polymer Science</option>
                <option value="Architecture">Architecture</option>
                <option value="Forestry & Environmental Science">Forestry & Environmental Science</option>
                <option value="Mechanical Engineering">Mechanical Engineering</option>
                <option value="Petroleum and Mining Engineering">Petroleum and Mining Engineering</option>
                <option value="Industrial and Production Engineering">Industrial and Production Engineering</option>
                <option value="Food Engineering & Tea Technology">Food Engineering & Tea Technology</option>
                <option value="Electrical & Electronic Engineering">Electrical & Electronic Engineering</option>
                <option value="Civil & Environmental Engineering">Civil & Environmental Engineering</option>
                <option value="Biochemistry and Molecular Biology">Biochemistry and Molecular Biology</option>
                <option value="Genetic Engineering & Biotechnology">Genetic Engineering & Biotechnology</option>
                <option value="Business Administration">Business Administration</option>
                <option value="Chemistry">Chemistry</option>
                <option value="Geography and Environment">Geography and Environment</option>
                <option value="Mathematics">Mathematics</option>
                <option value="Physics">Physics</option>
                <option value="Statistics">Statistics</option>
                <option value="Bangla">Bangla</option>
                <option value="Economics">Economics</option>
                <option value="English">English</option>
                <option value="Political Studies">Political Studies</option>
                <option value="Public Administration">Public Administration</option>
                <option value="Social Work">Social Work</option>
                <option value="Sociology">Sociology</option>
                <option value="Oceanography">Oceanography</option>
                <option value="Software Engineering">Software Engineering</option>
                <option value="Anthropology">Anthropology</option>
            </select><br />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="session">Session:</label>
            <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" id="session" name="session" value={formData.session} onChange={handleChange} required>
            <option value="2022-23">2022-23</option>
            <option value="2021-22">2021-22</option>
            <option value="2020-21">2020-21</option>
            <option value="2019-20">2019-20</option>
            <option value="2018-19">2018-19</option>
            <option value="2017-18">2017-18</option>
            <option value="2016-17">2017-18</option>
            </select><br />

            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Sex:</label>
            <div className="flex items-center mb-4">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="male" name="sex" value="male" checked={formData.sex === 'male'} onChange={handleChange} required />
                <label htmlFor="male">Male</label>
            </div>
           <div className="flex items-center mb-4">
                <input className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" type="radio" id="female" name="sex" value="female" checked={formData.sex === 'female'} onChange={handleChange} required />
                <label htmlFor="female">Female</label>
           </div>
           <div className="w-full flex items-center justify-center">
                <input className="px-4 py-3 bg-blue-600 rounded-md text-white outline-none focus:ring-4 shadow-lg transform active:scale-x-75 transition-transform mx-5 flex" type="submit" onSubmit={handleSubmit} value="Sign Up" />
           </div>
        </form>
    )
}

export default UserDetails;