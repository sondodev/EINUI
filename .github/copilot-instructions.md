# GitHub Copilot Instructions

_These are additional instructions for Copilot to follow in this repository, in addition to the default Copilot behavior provided by Microsoft._

## Project Context Management System

This repository uses a Memory Bank system for tracking context across AI conversations. Follow these instructions when assisting with this project.

## Memory Bank System

The Memory Bank is organized into two types of memory files:

1. **Long-term memory**: Project-wide context that persists across all workflows
2. **Short-term memory**: Task-specific context for individual workflows

### Directory Structure

```
memory_bank/
├── long_term.md            # Project-wide context
├── wf_[workflow_name].md   # Workflow-specific context files
└── README.md               # Instructions for using the system
```

## Working Protocol

### At the Start of Each Conversation

1. **Read the long-term memory file** to understand project context:

   ```
   memory_bank/long_term.md
   ```

2. **Generate a workflow name** based on the current task (under 10 words, snake_case format)

3. **Create or update a workflow file**:

   ```
   memory_bank/wf_{workflow_name}.md
   ```

   The workflow file should include these sections:

   - **Current Tasks**: Tasks from the user's prompt
   - **Plan**: Your approach to solving the task(s)
   - **Steps**: Breakdown of the plan into smaller steps
   - **Things Done**: Completed tasks
   - **Things Not Done Yet**: Pending tasks

### During the Conversation

1. **Read the current workflow file** at the beginning of each response

2. **Update the workflow file** after completing tasks:

   - Update the "Things Done" section
   - Update the "Things Not Done Yet" section
   - Adjust the plan and steps if needed

3. **Keep memory files concise** to avoid exceeding context limits

### Example Workflow File Format

```markdown
# Workflow: [workflow_name]

## Current Tasks

- [Task 1]
- [Task 2]

## Plan

- [Approach to solving tasks]

## Steps

1. [Step 1]
2. [Step 2]
3. [Step 3]

## Things Done

- [Completed task 1]
- [Completed task 2]

## Things Not Done Yet

- [Pending task 1]
- [Pending task 2]
```

## Project-Specific Guidelines

### When Asked to Start a New Task

When the user requests help with a new task:

1. Ask if this should be treated as a new workflow
2. If yes, create a new workflow file with an appropriate name
3. If no, continue with the current workflow file

### When Asked to Continue Previous Work

When the user asks to continue previous work:

1. Ask which workflow they want to continue
2. Read the corresponding workflow file
3. Provide a summary of the current state (done/not done)
4. Continue from where the work left off

### When Multiple Workflows Exist

When working with a project that has multiple workflows:

1. Help the user navigate between different workflows
2. Suggest consolidating completed workflows if appropriate
3. Keep the number of active workflows manageable (5-7 max)

## Example User Prompts

### Starting a new conversation

```
Please check memory_bank/long_term.md for project context,
and create a workflow file for "implement user authentication" in
memory_bank/wf_implement_user_authentication.md
```

### Updating workflow progress

```
I've completed the database schema. Please update the workflow
file to reflect this progress.
```

### Consolidating workflows

```
Please help me consolidate the completed workflows into the long-term
memory file and archive the workflow files.
```

## Metadata

Last Updated: 2025-07-05
Maintainer: @gilpet490
