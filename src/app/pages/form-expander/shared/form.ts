export enum FORM_ENUM {
  'checkbox', 'radiobtn'
}

export class FormType {
  id: string;
  headingAbove?: string;
  type: FORM_ENUM;
  text: string;
  value?: any;
}

export class FormWithCategory {
  id: string;
  categoryTitle: string;
  categoryInformation: string;
  required: boolean;
  dependentOnId?: string;
  buttons: FormType[];
  internalForm?: FormWithCategory[];
}

export const formExpander: FormWithCategory[] = [
  {
    id: 'generalSymptoms',
    categoryTitle: 'General Symptoms',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'recentWeightGain', type: FORM_ENUM.checkbox, text: 'Recent weight gain'},
      {id: 'recentWeightLoss', type: FORM_ENUM.checkbox, text: 'Recent weight loss'}
    ],
  },
  {
    id: 'headSymptoms',
    categoryTitle: 'Head Symptoms',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Frequent_headaches', type: FORM_ENUM.checkbox, text: 'Frequent headaches'},
      {id: 'Frequent_migraines', type: FORM_ENUM.checkbox, text: 'Frequent migraines'},
      {id: 'Head_injuries_or_concussion', type: FORM_ENUM.checkbox, text: 'Head injuries or concussion'},
      {id: 'Eye_pain', type: FORM_ENUM.checkbox, text: 'Eye pain'},
      {id: 'Earache_or_ear_drainage', type: FORM_ENUM.checkbox, text: 'Earache or ear drainage'},
      {id: 'Ringing_in_the_ears', type: FORM_ENUM.checkbox, text: 'Ringing in the ears'},
      {id: 'Hearing_loss', type: FORM_ENUM.checkbox, text: 'Hearing loss'},
      {id: 'Frequent_colds', type: FORM_ENUM.checkbox, text: 'Frequent colds'},
      {id: 'Frequent_hayfever', type: FORM_ENUM.checkbox, text: 'Frequent hayfever'},
      {id: 'Sinus_pain', type: FORM_ENUM.checkbox, text: 'Sinus pain'},
      {id: 'Blurred_vision', type: FORM_ENUM.checkbox, text: 'Blurred vision'},
      {id: 'Double_vision', type: FORM_ENUM.checkbox, text: 'Double vision'},
      {id: 'See_halos_around_eyes', type: FORM_ENUM.checkbox, text: 'See halos around eyes'},
      {id: 'Loss_of_sense_of_smell', type: FORM_ENUM.checkbox, text: 'Loss of sense of smell'},
      {id: 'Sores_in_mouth', type: FORM_ENUM.checkbox, text: 'Sores in mouth'},
      {id: 'Painful_or_bleeding_gums', type: FORM_ENUM.checkbox, text: 'Painful or bleeding gums'},
      {id: 'Speech_difficulties', type: FORM_ENUM.checkbox, text: 'Speech difficulties'},
      {id: 'Frequent_nosebleeds', type: FORM_ENUM.checkbox, text: 'Frequent nosebleeds'},
      {id: 'Numbness_on_one_side_of_the_face', type: FORM_ENUM.checkbox, text: 'Numbness on one side of the face'},
      {id: 'Pain_in_the_jaw', type: FORM_ENUM.checkbox, text: 'Pain in the jaw'},
      {id: 'Trouble_with_balance', type: FORM_ENUM.checkbox, text: 'Trouble with balance'},
      {id: 'Seizures_Personality_change', type: FORM_ENUM.checkbox, text: 'Seizures Personality change'},
      {id: 'Memory_change', type: FORM_ENUM.checkbox, text: 'Memory change'},
      {id: 'Memory_loss', type: FORM_ENUM.checkbox, text: 'Memory loss'},
      {id: 'Problems_sleeping', type: FORM_ENUM.checkbox, text: 'Problems sleeping'},
      {id: 'Changes_in_ability_to_walk_or_perform_daily_activities', type: FORM_ENUM.checkbox, text: 'Changes in ability to walk or perform daily activities'},
      {id: 'Pressure_in_the_head', type: FORM_ENUM.checkbox, text: 'Pressure in the head'},
    ],
    internalForm: [
      {
        id: 'moreAboutHeadaches',
        categoryTitle: 'Tell us more about your headaches',
        categoryInformation: 'What are the most frequent location(s) of your headaches?',
        required: true,
        dependentOnId: 'Frequent_headaches',
        buttons: [
          {id: 'front', type: FORM_ENUM.checkbox, text: 'Front'},
          {id: 'back',  type: FORM_ENUM.checkbox,  text: 'Back'},
          {id: 'leftSide', type: FORM_ENUM.checkbox, text: 'Left side'},
          {id: 'rightSide', type: FORM_ENUM.checkbox, text: 'Right side'},
        ]
      },
      {
        id: 'frequencyOfHeadaches',
        categoryTitle: '',
        categoryInformation: 'What is the frequency of your headaches?',
        required: true,
        dependentOnId: 'Frequent_headaches',
        buttons: [
          {id: 'Daily', type: FORM_ENUM.radiobtn, text: 'Daily'},
          {id: '2-3 times/week',  type: FORM_ENUM.radiobtn,  text: '2-3 times/week'},
          {id: 'Weekly', type: FORM_ENUM.radiobtn, text: 'Weekly'},
          {id: 'Less frequent', type: FORM_ENUM.radiobtn, text: 'Less frequent'},
        ],
      }
    ]
  },
  {
    id: 'Throat_Neck_and_Esophegal_symptoms',
    categoryTitle: 'Throat, Neck and Esophegal symptoms',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Frequent_heartburn_or_acid_reflux', type: FORM_ENUM.checkbox, text: 'Frequent heartburn or acid reflux'},
      {id: 'Chest_pain_that_is_worse_with_eating', type: FORM_ENUM.checkbox, text: 'Chest pain that is worse with eating'},
      {id: 'Nausea_Frequent_vomiting', type: FORM_ENUM.checkbox, text: 'Nausea Frequent vomiting'},
      {id: 'Frequent_choking_on_food', type: FORM_ENUM.checkbox, text: 'Frequent choking on food'},
      {id: 'Lumps_or_Swelling_in_Neck', type: FORM_ENUM.checkbox, text: 'Lumps or Swelling in Neck'},
      {id: 'Lumps_or_Swelling_under_the_Jaw_Glands', type: FORM_ENUM.checkbox, text: 'Lumps or Swelling under the Jaw (Glands)'},
      {id: 'Stiff_Painful_Neck', type: FORM_ENUM.checkbox, text: 'Stiff, Painful Neck'},
      {id: 'Frequent_Sore_Throats', type: FORM_ENUM.checkbox, text: 'Frequent Sore Throats'},
      {id: 'Difficulty_in_Swallowing', type: FORM_ENUM.checkbox, text: 'Difficulty in Swallowing'},
    ],
  },
  {
    id: 'Respiratory_symptoms',
    categoryTitle: 'Respiratory symptoms',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Coughing_up_Sputum', type: FORM_ENUM.checkbox, text: 'Coughing up Sputum'},
      {id: 'Wheezing_or_Asthma', type: FORM_ENUM.checkbox, text: 'Wheezing or Asthma'},
      {id: 'Feeling_of_breathlessness', type: FORM_ENUM.checkbox, text: 'Feeling of breathlessness'},
      {id: 'Chest_pain_when_coughing', type: FORM_ENUM.checkbox, text: 'Chest pain when coughing'},
      {id: 'Chest_pain_when_breathing', type: FORM_ENUM.checkbox, text: 'Chest pain when breathing'},
    ],
  },
  {
    id: 'Cardiovascular_symptoms',
    categoryTitle: 'Cardiovascular symptoms',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Rapid_heartbeat', type: FORM_ENUM.checkbox, text: 'Rapid heartbeat'},
      {id: 'Irregular_heartbeat_(palpitations)', type: FORM_ENUM.checkbox, text: 'Irregular heartbeat (palpitations)'},
      {id: 'Shortness_of_breath_without_exercise', type: FORM_ENUM.checkbox, text: 'Shortness of breath without exercise'},
      {id: 'Shortness_of_breath_with_exercise', type: FORM_ENUM.checkbox, text: 'Shortness of breath with exercise'},
      {id: 'Shortness_of_breath_on_lying_flat_in_bed', type: FORM_ENUM.checkbox, text: 'Shortness of breath on lying flat in bed'},
      {id: 'Pale_skin', type: FORM_ENUM.checkbox, text: 'Pale skin'},
      {id: 'Heart_disease', type: FORM_ENUM.checkbox, text: 'Heart disease'},
      {id: 'High_blood_pressure', type: FORM_ENUM.checkbox, text: 'High blood pressure'},
      {id: 'Chest_discomfort', type: FORM_ENUM.checkbox, text: 'Chest discomfort'},
      {id: 'Heart_murmur', type: FORM_ENUM.checkbox, text: 'Heart murmur'},
      {id: 'High_cholesterol', type: FORM_ENUM.checkbox, text: 'High cholesterol'},
      {id: 'Frequent_fainting_or_blackouts', type: FORM_ENUM.checkbox, text: 'Frequent fainting or blackouts'},
      {id: 'Unexplained_weakness', type: FORM_ENUM.checkbox, text: 'Unexplained weakness'},
    ],
  },
  {
    id: 'Abdominal_symptoms',
    categoryTitle: 'Abdominal symptoms',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Belching', type: FORM_ENUM.checkbox, text: 'Belching'},
      {id: 'Nausea_or_vomiting', type: FORM_ENUM.checkbox, text: 'Nausea or vomiting'},
      {id: 'Vomiting_blood', type: FORM_ENUM.checkbox, text: 'Vomiting blood'},
      {id: 'Frequent_Diarrhea', type: FORM_ENUM.checkbox, text: 'Frequent Diarrhea'},
      {id: 'Painful_bowel_movements', type: FORM_ENUM.checkbox, text: 'Painful bowel movements'},
      {id: 'Black_bowel_movements', type: FORM_ENUM.checkbox, text: 'Black bowel movements'},
      {id: 'Abdominal_pain_after_eating', type: FORM_ENUM.checkbox, text: 'Abdominal pain after eating'},
      {id: 'Abdominal_pain_unrelated_to_eating', type: FORM_ENUM.checkbox, text: 'Abdominal pain unrelated to eating'},
      {id: 'Elevated_blood_sugar', type: FORM_ENUM.checkbox, text: 'Elevated blood sugar'},
      {id: 'Jaundice_(yellow_skin)', type: FORM_ENUM.checkbox, text: 'Jaundice (yellow skin)'},
      {id: 'Unusual_thirst', type: FORM_ENUM.checkbox, text: 'Unusual thirst'},
      {id: 'Passing_blood_rectally', type: FORM_ENUM.checkbox, text: 'Passing blood rectally'},
      {id: 'Constipation', type: FORM_ENUM.checkbox, text: 'Constipation'},
      {id: 'Blood_in_urine', type: FORM_ENUM.checkbox, text: 'Blood in urine'},
      {id: 'Difficulty_starting_and_maintaining_a_steady_stream_of_urine', type: FORM_ENUM.checkbox, text: 'Difficulty starting and maintaining a steady stream of urine'},
      {id: 'Excessive_urination_during_night', type: FORM_ENUM.checkbox, text: 'Excessive urination during night'},
      {id: 'Excessive_urination_during_day', type: FORM_ENUM.checkbox, text: 'Excessive urination during day'},
      {id: 'Loss_of_bladder_control', type: FORM_ENUM.checkbox, text: 'Loss of bladder control'},
      {id: 'Cloudy_urine', type: FORM_ENUM.checkbox, text: 'Cloudy urine'},
      {id: 'Passing_stones_in_urine', type: FORM_ENUM.checkbox, text: 'Passing stones in urine'},
      {id: 'Flank_pain_(pain_that_runs_from_ribs_to_hips_on_one_side)', type: FORM_ENUM.checkbox, text: 'Flank pain (pain that runs from ribs to hips on one side)'},
    ],
  },
  {
    id: 'Gender_specific_symptoms',
    categoryTitle: 'Gender specific symptoms',
    categoryInformation: 'For women only, check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Bleeding_between_periods', type: FORM_ENUM.checkbox, text: 'Bleeding between periods'},
      {id: 'Vaginal_bleeding_since_menopause', type: FORM_ENUM.checkbox, text: 'Vaginal bleeding since menopause'},
      {id: 'Lumps_in_breast', type: FORM_ENUM.checkbox, text: 'Lumps in breast'},
      {id: 'Bloated_or_irritable_before_periods', type: FORM_ENUM.checkbox, text: 'Bloated or irritable before periods'},
      {id: 'Vaginal_discharge', type: FORM_ENUM.checkbox, text: 'Vaginal discharge'},
      {id: 'Vaginal_itching', type: FORM_ENUM.checkbox, text: 'Vaginal itching'},
      {id: 'Painful_periods', type: FORM_ENUM.checkbox, text: 'Painful periods'},
      {id: 'Pain_with_intercourse', type: FORM_ENUM.checkbox, text: 'Pain with intercourse'},
      {id: 'Scant_periods', type: FORM_ENUM.checkbox, text: 'Scant periods'},
      {id: 'Lactation_unrelated_to_pregnancy', type: FORM_ENUM.checkbox, text: 'Lactation unrelated to pregnancy'},
      {headingAbove: 'For men only, check any of the following symptoms that you are or have recently experienced',
        id: 'High_prostate_PSA', type: FORM_ENUM.checkbox, text: 'High prostate PSA'},
      {id: 'Discharge_from_penis', type: FORM_ENUM.checkbox, text: 'Discharge from penis'},
      {id: 'Any_swelling_or_bumps_in_testicles', type: FORM_ENUM.checkbox, text: 'Any swelling or bumps in testicles'},
      {id: 'Pain_in_testicles', type: FORM_ENUM.checkbox, text: 'Pain in testicles'},
      {id: 'Breast_growth', type: FORM_ENUM.checkbox, text: 'Breast growth'},
    ],
  },
  {
    id: 'Muscles_joints_and_bones',
    categoryTitle: 'Muscles, joints and bones',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Back_pain_ache', type: FORM_ENUM.checkbox, text: 'Back pain/ache'},
      {id: 'Joint_pain', type: FORM_ENUM.checkbox, text: 'Joint pain'},
      {id: 'Joint_swelling', type: FORM_ENUM.checkbox, text: 'Joint swelling'},
      {id: 'Numbness', type: FORM_ENUM.checkbox, text: 'Numbness'},
    ],
  },
  {
    id: 'Muscles_joints_and_bones',
    categoryTitle: 'Symptoms in the extremeties',
    categoryInformation: 'Check any of the following symptoms that you are or have recently experienced',
    required: false,
    buttons: [
      {id: 'Tingling_in_hands_or_feet', type: FORM_ENUM.checkbox, text: 'Tingling in hands or feet'},
      {id: 'Shaking_in_hands_or_feet', type: FORM_ENUM.checkbox, text: 'Shaking in hands or feet'},
      {id: 'Pain_in_calves_or_thighs_when_walking', type: FORM_ENUM.checkbox, text: 'Pain in calves or thighs when walking'},
      {id: 'Swelling_in_hands_or_feet', type: FORM_ENUM.checkbox, text: 'Swelling in hands or feet'},
      {id: 'Skin_turning_blue_in_fingers_or_toes', type: FORM_ENUM.checkbox, text: 'Skin turning blue in fingers or toes'},
    ],
    internalForm: [
      {
        id: 'Tell_us_more_about_the_shaking_in_your_hands_of_feet',
        categoryTitle: 'Tell us more about the shaking in your hands of feet',
        categoryInformation: 'Where have you been experiencing the shaking (tick one or all that apply)?',
        required: true,
        dependentOnId: 'Shaking_in_hands_or_feet',
        buttons: [
          {id: 'Left_hand', type: FORM_ENUM.checkbox, text: 'Left hand'},
          {id: 'Right_hand', type: FORM_ENUM.checkbox, text: 'Right hand'},
          {id: 'Left_foot', type: FORM_ENUM.checkbox, text: 'Left foot'},
          {id: 'Right_foot', type: FORM_ENUM.checkbox, text: 'Right foot'},
        ],
      }
    ]
  },
];
