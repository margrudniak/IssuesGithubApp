# IssuesGithubApp

Project was developed on Macbook with M1 processor, so to run on Intel, You have to change last lines on **Podfile**

Project was tested only on iOS

To be authorized on GithubAPI make `token.ts` file on root path. Contain:

`export const token = 'XXXXXXXXXXXXXXX';`

## ON M1
```
# Enables Flipper.

#

# Note that if you have use_frameworks! enabled, Flipper will not work and

# you should disable the next line.

# use_flipper!()

post_install do |installer|
react_native_post_install(installer)

    installer.aggregate_targets.each do |aggregate_target|
      aggregate_target.user_project.native_targets.each do |target|
        target.build_configurations.each do |config|
          config.build_settings['LIBRARY_SEARCH_PATHS'] = ['$(SDKROOT)/usr/lib/swift', '$(inherited)']
        end
      end
      aggregate_target.user_project.save
    end

end

end
```

## WIHOUT M1

```
# Enables Flipper.

#

# Note that if you have use_frameworks! enabled, Flipper will not work and

# you should disable the next line.

use_flipper!()

post_install do |installer|
react_native_post_install(installer)
end
end
```
