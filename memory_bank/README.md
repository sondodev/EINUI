# Memory Bank for AI Context Management

This system helps maintain context across AI conversations by storing both long-term project information and short-term workflow tracking.

## Structure

- `long_term.md`: Contains project-wide information that persists across all workflows
- `wf_*.md`: Workflow-specific files that track progress on particular tasks

## How to Use

### 1. Set Up Long-Term Memory

Edit the `long_term.md` file to include key project information:

- Project goals
- Technology stack
- Architecture (folder & file structure)
- Conventions
- Solution direction

### 2. For Each New AI Conversation

At the beginning of each conversation with AI:

1. Mention that you're using the Memory Bank system
2. Provide a name for the current workflow
3. Ask the AI to:
   - Read the long_term.md file
   - Create or update the appropriate workflow file

### 3. During Conversations

Periodically ask the AI to:

- Update the workflow file with completed and pending tasks
- Adjust the plan and steps as needed

### 4. Integration with IDEs

#### For Cursor/Windsurf

When starting a new tab conversation, paste this prompt:

```
Before we begin, please:
1. Read memory_bank/long_term.md to understand project context
2. Create/update a workflow file for our current task:
   - Suggest a workflow name (under 10 words)
   - Create/update memory_bank/wf_{workflow_name}.md with our current context
3. Update the workflow file as we make progress
```

#### For GitHub Copilot

When starting a new conversation, begin with:

```
Please check memory_bank/long_term.md for project context, and create/update a workflow file in memory_bank/wf_{workflow_name}.md to track our current task.
```

Remember to keep memory files concise to avoid exceeding context limits.
