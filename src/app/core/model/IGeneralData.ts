
export interface IGeneralData{
    skills:ISkill[],
    experience:IExperience,
    projects:IProject[],
    about:String[][]
}

export interface ISkill{
    title:String,
    values:String[]
}

export interface IExperience{
    companyName:String
    role:String
    startDate:String
    endDate:String
    isPresent:boolean
    points:String[]
}

export interface IProject{
    title:String,
    subtitle?:String,
    descriptions:String[],
    tags:String[],
    githubLink:String
    liveLink:String
}
