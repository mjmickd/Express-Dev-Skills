const todos = [
    {id: 55555, skill: 'Function Review', completed: true},
    {id: 12345, skill: 'Mongoose', completed: false},
    {id: 67890, skill: 'CSS', completed: true},
    {id: 55656, skill: 'Array Iteration', completed: true}
  ];
  
  module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
  };
  
  function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skills => skill.id === id);
    Object.assign(skill, updatedSkill);
  }
  
  function deleteOne(id) {
    id = parseInt(id);
    // Find the index for the skill
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
  }
  
  function create(skill) {
    // Add the id
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill);
  }
  
  function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
  }
  
  function getAll() {
    return skills;
  }