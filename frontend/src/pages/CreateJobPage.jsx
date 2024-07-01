import { useEffect, useState } from "react";
import ChipsSelector from "../components/ChipsSelector";
import styles from "./CreateJobPage.module.css";
import { createJob } from "../api/Job";
// import { set } from "mongoose";

function CreateJobPage ({ currentUser }) {
	const validJobTypes = ["Full-Time", "Part-Time", "Internship"];
	const validLocationTypes = ["On-Site", "Remote", "Hybrid"];

	const [job, setJob] = useState({
		companyName: "",
		title: "",
		description: "",
		logoUrl: "",
		jobType: "",
		salary: "",
		location: "",
		duration: "",
		locationType: "",
		information: "",
		skills: [],
	});

	const handleJobTypeChange = (value) => {
		if (validJobTypes.includes(value)) {
			setJob({ ...job, jobType: value });
		}
	};

	const handleLocationTypeChange = (value) => {
		if (validLocationTypes.includes(value)) {
			setJob({ ...job, locationType: value });
		}
	};

	const handleJobCreate = async () => {
		console.log(job);
		const response = await createJob(job);
		if (response.status === 201) {
			setJob({
				companyName: "",
				title: "",
				description: "",
				logoUrl: "",
				jobType: "",
				salary: "",
				location: "",
				duration: "",
				locationType: "",
				information: "",
				skills: [],
			});
			alert("Job added successfully");
		} else {
			alert("Error adding job");
		}
	};

	return (
		<div className={styles.container}>
			<div className={styles.body}>
				<h3 className={styles.header}>Add job description</h3>

				<div className={styles.inputElement}>
					<label className={styles.label}>Company Name</label>
					<input
						placeholder="Enter the company name here"
						style={{marginLeft:'70px'}}
						className={styles.box}
						type="text"
						value={job.companyName}
						onChange={(e) => setJob({ ...job, companyName: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<label className={styles.label}>Add logo URL</label>
					<input
						placeholder="Enter the link"
						style={{marginLeft:'89px'}}
						className={styles.box}
						type="text"
						value={job.logoUrl}
						onChange={(e) => setJob({ ...job, logoUrl: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<label className={styles.label}>Job Position</label>
					<input
						placeholder="Enter job position"
						style={{marginLeft:'96px'}}
						className={styles.box}
						type="text"
						value={job.title}
						onChange={(e) => setJob({ ...job, title: e.target.value })}
					/>
				</div>
				<div className={styles.inputElement}>
					<label className={styles.label}>Duration</label>
					<input
						placeholder="Enter job duration"
						style={{marginLeft:'122px'}}
						className={styles.box}
						type="text"
						value={job.duration}
						onChange={(e) => setJob({ ...job, duration: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<label className={styles.label}>Monthly Salary</label>
					<input
						placeholder="Enter Amount in rupees"
						style={{marginLeft:'77px'}}
						className={styles.box}
						type="text"
						value={job.salary}
						onChange={(e) => setJob({ ...job, salary: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<label className={styles.label}>Job Type</label>
					<input
						placeholder="Select"
					style={{marginLeft:'117px'}}
					className={styles.type}
						type="text"
						value={job.jobType}
						onChange={(e) => setJob({ ...job, jobType: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<label className={styles.label}>Remote/Office</label>
					<input
					placeholder="Select"
					style={{marginLeft:'79px'}}
					className={styles.remote}
						type="text"
						value={job.locationType}
						onChange={(e) => setJob({ ...job, locationType: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<label className={styles.label}>Location</label>
					<input
						placeholder="Enter location"
						style={{marginLeft:'122px'}}
						className={styles.box}
						type="text"
						value={job.location}
						onChange={(e) => setJob({ ...job, location: e.target.value })}
					/>
				</div>
				<div className={styles.inputElement}>
					<label className={styles.label}>Job Description</label>
					<input
						placeholder="Type the job description"
						style={{marginLeft:'72px'}}
						className={styles.desc}
						type="text"
						value={job.description}
						onChange={(e) => setJob({ ...job, description: e.target.value })}
					/>
				</div>

				<div className={styles.inputElement}>
					<ChipsSelector
						style={{marginLeft:'122px'}}
						selectedSkills={job.skills}
						setSelectedSkills={(skills) => setJob({ ...job, skills })}
					/>
				</div>
				<div className={styles.inputElement}>
					<label className={styles.label}>Information </label>
					<input
					placeholder="Enter the additional information"
						style={{marginLeft:'100px'}}
						className={styles.box}
						type="text"
						value={job.information}
						onChange={(e) => setJob({ ...job, information: e.target.value })}
					/>
				</div>
				<div className={styles.butttons}>
					<button className={styles.cancel}>Cancel</button>
					<button className={styles.add} onClick={handleJobCreate}>+Add Job</button>
				</div>
			</div>
			<div className={styles.rightSide}>
				<h1 className={styles.rhtype}>Recruiter add job details here</h1>
			</div>
		</div>
		
	);
};

export default CreateJobPage;