type SkillChipProps = {
  label: string
}

export function SkillChip({ label }: SkillChipProps) {
  return <li className="skill-chip">{label}</li>
}
