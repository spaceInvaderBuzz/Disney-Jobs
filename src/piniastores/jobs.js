import { defineStore } from "pinia";
import { useUserStore } from "@/piniastores/user";

import getJobs from "@/api/getJobs";
import axios from "axios";

export const FETCH_JOBS = "FETCH_JOBS";
export const UNIQUE_ORGANIZATIONS = "UNIQUE_ORGANIZATIONS";
export const FILTERED_JOBS_BY_ORGANIZATIONS = "FILTERED_JOBS_BY_ORGANIZATIONS";
export const FILTERED_JOBS_BY_JOBTYPES = "FILTERED_JOBS_BY_JOBTYPES";
export const UNIQUE_JOB_TYPES = "UNIQUE_JOB_TYPES";
export const FILTERED_JOBS = "FILTERED_JOBS";

export const useJobsStore = defineStore("jobs", {
    state: () => ({
        jobs: [],
    }),
    actions: {
        async [FETCH_JOBS](){
            const jobs = await getJobs();
            this.jobs = jobs;
            
        },
    },
    getters: {
        [UNIQUE_ORGANIZATIONS](state) {
            const uniqueOrganizations = new Set();
            state.jobs.forEach((job) => uniqueOrganizations.add(job.organization));
            return uniqueOrganizations;
        },
        [UNIQUE_JOB_TYPES](state){
            const uniqueJobTypes = new Set();
            state.jobs.forEach((job) => uniqueJobTypes.add(job.jobType));
            return uniqueJobTypes;
           
        },
        [FILTERED_JOBS_BY_ORGANIZATIONS](state){
            const userStore = useUserStore();
            if (userStore.selectedOrganizations.length === 0){
                return state.jobs;
            }
            return state.jobs.filter((job) => userStore.selectedOrganizations.includes(job.organization));
        },
        [FILTERED_JOBS_BY_JOBTYPES](state){ //THIS RETURN FILTERED ARRAY THAT JSUT INCLDUE JOB TYPES
            const userStore = useUserStore();
            if (userStore.selectedJobTypes.length === 0){
                return state.jobs;
            }
            return state.jobs.filter((job) => userStore.selectedJobTypes.includes(job.jobType));

        },
        [FILTERED_JOBS](state){
            const userStore = useUserStore();

            const noSelectedOrganizations = userStore.selectedOrganizations.length === 0;
            const noSelectedJobTypes = userStore.selectedJobTypes.length === 0;

            if (noSelectedJobTypes && noSelectedOrganizations) return state.jobs;

            return state.jobs.filter((job) => {
                if (noSelectedOrganizations) return true;
                return userStore.selectedOrganizations.includes(job.organization);
            }).filter((job) => {
                if (noSelectedJobTypes) return true;
                return userStore.selectedJobTypes.includes(job.jobType);
            });
               

            

        }
    },
 
});