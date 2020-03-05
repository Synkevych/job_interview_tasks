## Message Type: The type is contained within the title and can be one of these types:

**feat**: a new feature
**fix**: a bug fix
**docs**: changes to documentation
**style**: formatting, missing semi colons, etc; no code change
**refactor**: refactoring production code
**test**: adding tests, refactoring test; no production code change
**chore**: updating build tasks, package manager configs, etc; no production code change

### 1 Работа с ошибками git
1 В ветке v1 обнаружилась ошибка, через это мы не можем вернуть наши изменения из v2 в master,
что нужно сделать чтобы исправить проблемы с веткой v1?
Отменить изменения которые были сделаны в ветке (v1), переключившись на нее и выполнив reset HEAD
```
$ (master) - (v1) - (v2)
```
В ветке v1 не получится скинуть HEAD и потом смерджить ее с v2
Нужно сделать revert для ветки (v1) это добавит новый коммит в верх с примененными изменениями

```git
$ git revert v1
// будет выведено окно с изменениями которые нужно применить

```
### 2 Как слить две ветки v2 & v3 если при автоматическом слиянии есть ошибка ? 
```
$(master) - (v1) - (v2)*
$          \ _ _ _ (v3)
$ git merge v3
```
Код с ощибкой откроется в редакторе где будет указано что пошло не так,
можно выбрать код который нам нужен а другой удалить. 

Вы можете вернуться назад и изменить ваш старый коммит. 
Никогда не делайте этого если вы уже опубликовали вашу историю; git не предполагает изменения в истории проекта,
и не может правильно выполнять повтор слияния из ветки, история которой была изменена.

### git cherry-pick
Команда git cherry-pick используется для того чтобы взять изменения, внесённые каким-либо коммитом, и попытаться применить их заново в виде нового коммита наверху текущей ветки. Это может оказаться полезным чтобы забрать парочку коммитов из другой ветки без полного слияния с той веткой.

### git revert 
Команда git revert — полная противоположность git cherry-pick. Она создаёт "антикоммит" для указанного коммита, таким образом отменяя изменения, внесённые в нём..

### git --ammend
Отмена изменений в сжеланом комите. 

### git stash
Позволяет создать новую "заначку". Тоесть скрыть все изменения перед переключение на другую ветку не делая при этом коммит. 
git stash apply – позволяет вернуться к припрятаным работам.

### keep the file in your working tree but remove it from your staging area.
```git
git rm --cached README
```

### Ten common git problems 

(1) How to rename files correctly
```bash
git mv old new # automatically updates the index
```

_mv old new_ then _git add -A_ would have worked, too.
_git commit --dry-run -a_ shows two different results where
git commit --dry-run -a shows two different results where